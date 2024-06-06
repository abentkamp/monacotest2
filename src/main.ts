import './style.css'

import { initialize as initializeMonacoService } from 'vscode/services'
import { ExtensionHostKind, registerExtension } from 'vscode/extensions'
import getModelServiceOverride from '@codingame/monaco-vscode-model-service-override'
import getExtensionServiceOverride from '@codingame/monaco-vscode-extensions-service-override'
import 'vscode/localExtensionHost'
import { workspace } from 'vscode'

async function go() {
 
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="editor"></div>
  </div>
  `

  await initializeMonacoService({
  ...getModelServiceOverride(),
  ...getExtensionServiceOverride()
  })

  await registerExtension({
  name: 'monacotest2',
  publisher: 'hhu-adam',
  version: '1.0.0',
  engines: {
    vscode: '*'
  },
  }, ExtensionHostKind.LocalProcess).setAsDefaultApi()

  workspace.getConfiguration(undefined);

}

go()