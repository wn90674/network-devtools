<script setup lang="ts">
import { type PropType, ref, computed } from 'vue';
import { DevtoolsNetworkInfo } from '../types';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

  const props = defineProps({
    modelValue: {
      type: Boolean
    },
    detailInfo: {
      type: Object as PropType<DevtoolsNetworkInfo>,
      required: true
    }
  })

 const query = computed(() => {
  if(props.detailInfo) {
    return Object.fromEntries(props.detailInfo.request.queryString.map(({name,value}) => [name, value]))
  }
   return {}
 })


 const body = computed(() => {
  if(props.detailInfo) {
    return props.detailInfo.request.postData
  }

  return ''
 })

 const response = computed(() => {
  // todo
  if(props.detailInfo) {
    const {statusText} = props.detailInfo.response
    return statusText ? JSON.parse(statusText) : {}
  }

 })

  const emits = defineEmits(['update:modelValue'])

  const onCloseModel = () => {
    emits('update:modelValue', false)
  }
  const id = ref('1')
  // const editor = shallowRef<JsonEditor>()
  const onTabChange = (value: string) => {
    id.value = value
  }
</script>

<template>
  <div
    v-show="modelValue"
    class="popup fixed top-0 right-0 z-10 w-96 h-screen bg-white flex flex-col shadow-xl drop-shadow-lg"
  >
    <div
      class="tabs w-full flex items-center border-b border-solid border-gray-800 bg-slate-400"
    >
      <div class="tabs-item" @click="onCloseModel">x</div>
      <div class="tabs-item" @click="onTabChange('1')" :class="{ active: id === '1' }">
        query
      </div>
      <div class="tabs-item" @click="onTabChange('2')" :class="{ active: id === '2' }">
        body
      </div>
      <div class="tabs-item" @click="onTabChange('3')" :class="{ active: id === '3' }">
        response
      </div>
    </div>

    <div class="flex-1 overflow-auto">
      <div v-show="id === '1'">
        <vue-json-pretty :show-icon="true" :data="query" />
      </div>
      <div v-show="id === '2'">
        <div id="json"></div>
      </div>
      <div v-show="id === '3'">
        <vue-json-pretty :show-icon="true" :data="response" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.tabs-item {
  @apply px-2 border-r border-solid border-gray-700 hover:cursor-pointer hover:text-sky-600;
}

.active {
  @apply text-sky-500 bg-white;
}
</style>

<style>
  #json .jsoneditor-search input {
  @apply bg-slate-200;
}
</style>
