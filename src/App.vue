<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, ref } from "vue";
import { type DevtoolsNetworkInfo, networkInfo } from "./types/index";
import dayjs from "dayjs";
import RightModel from "./components/RightModel.vue";

const networkList = ref<Array<DevtoolsNetworkInfo & { id: any }>>([]);
// const requestObj = ref<DevtoolsNetworkInfo['request']>()
onMounted(() => {
  // @ts-ignore
  chrome.devtools.network.onRequestFinished.addListener(function (
    data: DevtoolsNetworkInfo
  ) {
    if (data._resourceType === "xhr" || data._resourceType === "fetch") {
      if (data.getContent) {
        data.getContent((s) => {
          if (data.response.content.mimeType === "application/json") {
            // 只处理json格式返回
            data.response.statusText = s;
            networkList.value.push({
              ...data,
              id: data.startedDateTime.toString(),
            });
          }
        });
      }
    }
  });

  //   networkList.value = Array.from({
  //   length: 10
  // }).map((_,index) => ({
  //   id: index,
  //   ...networkInfo
  // }))
});

const show = ref(false);

const activeId = ref("");
const currentInfo = ref();
const changeActive = (id: string) => {
  activeId.value = id;
  currentInfo.value = networkList.value.find((item) => id === item.id);
  if (!show.value) {
    show.value = true;
  }
};

type Unit = "B" | "KB" | "MB";
function formatFileSize(size: number, unit: Unit = "B"): string {
  if (unit === "B" && size >= 1024) {
    return formatFileSize(size / 1024, "KB");
  }

  if (unit === "KB" && size >= 1024) {
    return formatFileSize(size / 1024, "MB");
  }

  // todo
  return `${size.toFixed(unit === "B" ? 0 : 2)}${unit}`;
}

function formatDateTime(datetime: string) {
  return dayjs(datetime).format("HH:mm:ss");
}

function isSuccess(status: number) {
  return /^2\d{2}/.test(status.toString());
}

function isFail(status: number) {
  return /^2\d{2}/.test(status.toString());
}

function getPath(url: string) {
  const reg = /^https?:\/\/.+\/(.+)/;
  return url.match(reg) ? url.match(reg)![1] : url;
}
</script>

<template>
  <div class="w-screen border-l-1 border-t-1 border-solid border-gray-700">
    <table class="w-full" v-if="networkList.length">
      <colgroup>
        <col width="320" />
        <col width="80" align="center" />
        <col width="80" align="center" />
        <col width="80" align="center" />
        <col width="80" align="center" />
        <col width="80" align="center" />
        <col width="80" align="center" />
        <col width="200" />
      </colgroup>
      <thead>
        <tr>
          <th>Path</th>
          <th>Method</th>
          <th>Type</th>
          <th>Status</th>
          <th>CurrentTime</th>
          <th>Time</th>
          <th>Size</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in networkList"
          class="fail hover:bg-purple-100"
          :class="{ active: item.id === activeId }"
          @click="changeActive(item.id)"
        >
          <td class="max-w-xs truncate">{{ getPath(item.request.url) }}</td>
          <td class="text-center">{{ item.request.method }}</td>
          <td class="text-center">{{ item._resourceType }}</td>
          <td
            class="text-center"
            :class="[{ success: isSuccess(item.response.status) }]"
          >
            {{ item.response.status }}
          </td>
          <td class="text-center">
            {{ formatDateTime(item.startedDateTime) }}
          </td>
          <td class="text-center">{{ `${item.time.toFixed(2)}ms` }}</td>
          <td class="text-center">
            {{ formatFileSize(item.response._transferSize) }}
          </td>
          <td>{{ item.response.content.mimeType }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <RightModel v-model="show" :detail-info="currentInfo" />
</template>

<style scoped lang="postcss">
table {
  border-collapse: collapse;
}
th,
td {
  font-size: 12px;
  @apply px-2 py-1 text-sky-500 border border-solid border-gray-600;
}

th {
  @apply text-center;
}
tr.fail td {
  @apply text-rose-500;
}

tr.active td {
  @apply text-gray-600 font-bold bg-sky-300;
}
/* td.success {
  @apply .text-green-500;
} */
</style>
