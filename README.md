# yx-plus
Create common component library based on element ui

## Install
```
yarn add yx-plus or npm install yx-plus -S
```

# Quick Start
```
import Vue from 'vue'
import Element from 'element-ui'
import YXUI from 'yx-plus'
import 'yx-plus/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.use(YXUI)

// or
import {
  Block
  // ...
} from 'yx-plus'

Vue.component(Block.name, Block)
```

### Compiles and hot-reloads for development
```
yarn serve or npm run serve
```

### Compiles and minifies for production
```
yarn build or npm run build
```

### Lints and fixes files
```
yarn lint or npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
