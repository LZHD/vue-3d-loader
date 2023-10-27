
import vue3dPreviewer from './3dLoader/vue3dLoader.vue'
import * as Three from 'three';
const components = [vue3dPreviewer]

// vue install function
const install = function (Vue) {
  // Register components
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}

export { vue3dPreviewer, Three }
