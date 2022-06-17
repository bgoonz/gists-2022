## System Info

* Code - Insiders: 1.62.0-insider (ff1e16eebb93af79fd6d7af1356c4003a120c563)
* OS: win32(6.2.9200)
* CPUs: Intel(R) Core(TM) i5-8365U CPU @ 1.60GHz(8 x 1896)
* Memory(System): 15.75 GB(2.60GB free)
* Memory(Process): 242.16 MB working set(195.97MB private, 0.21MB shared)
* VM(likelihood): 0%
* Initial Startup: true
* Has 0 other windows
* Screen Reader Active: false
* Empty Workspace: false

## Performance Marks

| What                                                            | Duration | Process                   | Info                                                         |
| --------------------------------------------------------------- | -------- | ------------------------- | ------------------------------------------------------------ |
| start => app.isReady                                            | 327      | [main]                    | initial startup: true                                        |
| nls:start => nls:end                                            | 0        | [main]                    | initial startup: true                                        |
| require(main.bundle.js)                                         | 284      | [main]                    | initial startup: true                                        |
| start crash reporter                                            | 128      | [main]                    | initial startup: true                                        |
| serve main IPC handle                                           | 5        | [main]                    | initial startup: true                                        |
| create window                                                   | 210      | [main]                    | initial startup: true, state: 1ms, widget: 80ms, show: 128ms |
| app.isReady => window.loadUrl()                                 | 732      | [main]                    | initial startup: true                                        |
| window.loadUrl() => begin to require(workbench.desktop.main.js) | 2083     | [main->renderer]          | ReloadedWindow                                               |
| require(workbench.desktop.main.js)                              | 1198     | [renderer]                | cached data: YES, node_modules took 0ms                      |
| wait for window config                                          | 1        | [renderer]                | -                                                            |
| init storage (global & workspace)                               | 353      | [renderer]                | -                                                            |
| init workspace service                                          | 441      | [renderer]                | -                                                            |
| register extensions & spawn extension host                      | 4557     | [renderer]                | -                                                            |
| restore viewlet                                                 | 305      | [renderer]                | workbench.view.extensions                                    |
| restore panel                                                   | 67       | [renderer]                | terminal                                                     |
| restore & resolve visible editors                               | 1228     | [renderer]                | 1: workbench.editors.files.fileEditorInput                   |
| overall workbench load                                          | 2272     | [renderer]                | -                                                            |
| workbench ready                                                 | 7101     | [main->renderer]          | -                                                            |
| renderer ready                                                  | 3985     | [renderer]                | -                                                            |
| shared process connection ready                                 | 0        | [renderer->sharedprocess] | -                                                            |
| extensions registered                                           | 10882    | [renderer]                | -                                                            |

## Extension Activation Stats

| Extension                               | Eager | Load Code | Call Activate | Finish Activate | Event                          | By                                      |
| --------------------------------------- | ----- | --------- | ------------- | --------------- | ------------------------------ | --------------------------------------- |
| vscode.debug-auto-launch                | true  | 111       | 1             | 763             | *                              | vscode.debug-auto-launch                |
| vscode.git                              | true  | 510       | 42            | 1331            | *                              | vscode.git                              |
| AnchovyStudios.zip-extract-all          | true  | 340       | 77            | 643             | *                              | AnchovyStudios.zip-extract-all          |
| cweijan.vscode-office                   | true  | 1055      | 448           | 195             | *                              | cweijan.vscode-office                   |
| eliostruyf.vscode-hide-comments         | true  | 31        | 4             | 191             | *                              | eliostruyf.vscode-hide-comments         |
| GitHub.copilot                          | true  | 1106      | 32            | 4436            | *                              | GitHub.copilot                          |
| GitHub.vscode-pull-request-github       | true  | 143       | 2             | 3007            | *                              | GitHub.vscode-pull-request-github       |
| mdickin.markdown-shortcuts              | true  | 53        | 4             | 153             | *                              | mdickin.markdown-shortcuts              |
| monokai.theme-monokai-pro-vscode        | true  | 24        | 5             | 148             | *                              | monokai.theme-monokai-pro-vscode        |
| PKief.material-icon-theme               | true  | 68        | 0             | 179             | *                              | PKief.material-icon-theme               |
| ritwickdey.LiveServer                   | true  | 4734      | 32            | 116             | *                              | ritwickdey.LiveServer                   |
| Shan.code-settings-sync                 | true  | 1757      | 78            | 38              | *                              | Shan.code-settings-sync                 |
| vscode.configuration-editing            | false | 80        | 4             | 753             | onLanguage:json                | vscode.configuration-editing            |
| vscode.github-authentication            | false | 79        | 17            | 757             | onAuthenticationRequest:github | vscode.github-authentication            |
| ms-vscode-remote.remote-wsl-recommender | false | 128       | 0             | 83              | onStartupFinished              | ms-vscode-remote.remote-wsl-recommender |
| axetroy.vscode-markdown-script          | false | 114       | 10            | 17              | onLanguage:markdown            | axetroy.vscode-markdown-script          |
| docsmsft.docs-markdown                  | false | 262       | 26            | 767             | onLanguage:json                | docsmsft.docs-markdown                  |
| esbenp.prettier-vscode                  | false | 1356      | 72            | 38              | onStartupFinished              | esbenp.prettier-vscode                  |
| formulahendry.code-runner               | false | 517       | 11            | 27              | onStartupFinished              | formulahendry.code-runner               |
| jebbs.markdown-extended                 | false | 3115      | 2             | 15              | onLanguage:markdown            | jebbs.markdown-extended                 |
| shd101wyy.markdown-preview-enhanced     | false | 19586     | 15            | 0               | onLanguage:markdown            | shd101wyy.markdown-preview-enhanced     |

## Raw Perf Marks: main

```
Name	Timestamp	Delta	Total
code/timeOrigin	1635740250331	0	0
code/didStartMain	1635740250698	367	367
code/willStartCrashReporter	1635740250778	80	447
code/didStartCrashReporter	1635740250906	128	575
code/mainAppReady	1635740251025	119	694
code/willLoadMainBundle	1635740251040	15	709
code/fork/willLoadCode	1635740251095	55	764
code/registerFilesystem/file	1635740251314	219	983
code/didLoadMainBundle	1635740251324	10	993
code/willStartMainServer	1635740251355	31	1024
code/didStartMainServer	1635740251360	5	1029
code/willCreateCodeWindow	1635740251534	174	1203
code/willRestoreCodeWindowState	1635740251534	0	1203
code/didRestoreCodeWindowState	1635740251535	1	1204
code/willCreateCodeBrowserWindow	1635740251535	0	1204
code/didCreateCodeBrowserWindow	1635740251615	80	1284
code/willMaximizeCodeWindow	1635740251615	0	1284
code/didMaximizeCodeWindow	1635740251743	128	1412
code/didCreateCodeWindow	1635740251744	1	1413
code/willOpenNewWindow	1635740251757	13	1426
```
## Raw Perf Marks: renderer

```
Name	Timestamp	Delta	Total
code/timeOrigin	1635740251759	0	0
code/didStartRenderer	1635740253814	2055	2055
code/willWaitForWindowConfig	1635740253815	1	2056
code/didWaitForWindowConfig	1635740253816	1	2057
code/willShowPartsSplash	1635740253816	0	2057
code/didShowPartsSplash	1635740253821	5	2062
code/willLoadWorkbenchMain	1635740253840	19	2081
code/didLoadWorkbenchMain	1635740255038	1198	3279
code/registerFilesystem/file	1635740255069	31	3310
code/registerFilesystem/vscode-userdata	1635740255069	0	3310
code/willInitWorkspaceService	1635740255074	5	3315
code/willInitStorage	1635740255075	1	3316
code/willInitUserConfiguration	1635740255075	0	3316
code/didInitStorage	1635740255428	353	3669
code/didInitUserConfiguration	1635740255451	23	3692
code/willInitWorkspaceConfiguration	1635740255451	0	3692
code/didInitWorkspaceConfiguration	1635740255514	63	3755
code/didInitWorkspaceService	1635740255515	1	3756
code/willStartWorkbench	1635740255527	12	3768
code/LifecyclePhase/Ready	1635740255730	203	3971
code/registerFilesystem/trustedDomains	1635740255796	66	4037
code/willRestoreEditors	1635740256571	775	4812
code/willRestoreViewlet	1635740256587	16	4828
code/willRestorePanel	1635740256825	238	5066
code/didRestoreViewlet	1635740256892	67	5133
code/didRestorePanel	1635740256892	0	5133
code/willLoadExtensions	1635740257023	131	5264
code/willConnectSharedProcess	1635740257194	171	5435
code/didRestoreEditors	1635740257799	605	6040
code/LifecyclePhase/Restored	1635740257799	0	6040
code/didStartWorkbench	1635740257799	0	6040
code/didRemovePartsSplash	1635740257800	1	6041
code/willHandleExtensionPoints	1635740258432	632	6673
code/didHandleExtensionPoints	1635740261562	3130	9803
code/didLoadExtensions	1635740261580	18	9821
```
## Raw Perf Marks: localExtHost

```
Name	Timestamp	Delta	Total
code/timeOrigin	1635740257139	0	0
code/fork/start	1635740257408	269	269
code/fork/willLoadCode	1635740257476	68	337
code/extHost/willConnectToRenderer	1635740258818	1342	1679
code/extHost/didConnectToRenderer	1635740258837	19	1698
code/extHost/didWaitForInitData	1635740264118	5281	6979
code/extHost/didCreateServices	1635740264284	166	7145
code/extHost/willWaitForConfig	1635740264304	20	7165
code/extHost/didWaitForConfig	1635740264693	389	7554
code/extHost/didInitAPI	1635740265384	691	8245
code/extHost/didInitProxyResolver	1635740265431	47	8292
code/extHost/ready	1635740265431	0	8292
code/extHost/willLoadExtensionCode/vscode.github-authentication	1635740265528	97	8389
code/extHost/didLoadExtensionCode/vscode.github-authentication	1635740265606	78	8467
code/extHost/willLoadExtensionCode/vscode.configuration-editing	1635740265608	2	8469
code/extHost/didLoadExtensionCode/vscode.configuration-editing	1635740265688	80	8549
code/extHost/willLoadExtensionCode/docsmsft.docs-markdown	1635740265695	7	8556
code/extHost/didLoadExtensionCode/docsmsft.docs-markdown	1635740265957	262	8818
code/extHost/willLoadExtensionCode/vscode.debug-auto-launch	1635740265960	3	8821
code/extHost/didLoadExtensionCode/vscode.debug-auto-launch	1635740266071	111	8932
code/extHost/willLoadExtensionCode/vscode.git	1635740266074	3	8935
code/extHost/didLoadExtensionCode/vscode.git	1635740266584	510	9445
code/extHost/willLoadExtensionCode/AnchovyStudios.zip-extract-all	1635740266586	2	9447
code/extHost/didLoadExtensionCode/AnchovyStudios.zip-extract-all	1635740266926	340	9787
code/extHost/willLoadExtensionCode/cweijan.vscode-office	1635740266929	3	9790
code/extHost/didLoadExtensionCode/cweijan.vscode-office	1635740267983	1054	10844
code/extHost/willLoadExtensionCode/eliostruyf.vscode-hide-comments	1635740267986	3	10847
code/extHost/didLoadExtensionCode/eliostruyf.vscode-hide-comments	1635740268016	30	10877
code/extHost/willLoadExtensionCode/GitHub.copilot	1635740268017	1	10878
code/extHost/didLoadExtensionCode/GitHub.copilot	1635740269123	1106	11984
code/extHost/willLoadExtensionCode/GitHub.vscode-pull-request-github	1635740269125	2	11986
code/extHost/didLoadExtensionCode/GitHub.vscode-pull-request-github	1635740269268	143	12129
code/extHost/willLoadExtensionCode/mdickin.markdown-shortcuts	1635740269270	2	12131
code/extHost/didLoadExtensionCode/mdickin.markdown-shortcuts	1635740269323	53	12184
code/extHost/willLoadExtensionCode/monokai.theme-monokai-pro-vscode	1635740269324	1	12185
code/extHost/didLoadExtensionCode/monokai.theme-monokai-pro-vscode	1635740269348	24	12209
code/extHost/willLoadExtensionCode/PKief.material-icon-theme	1635740269350	2	12211
code/extHost/didLoadExtensionCode/PKief.material-icon-theme	1635740269418	68	12279
code/extHost/willLoadExtensionCode/ritwickdey.LiveServer	1635740269419	1	12280
code/extHost/didLoadExtensionCode/ritwickdey.LiveServer	1635740274153	4734	17014
code/extHost/willLoadExtensionCode/Shan.code-settings-sync	1635740274154	1	17015
code/extHost/didLoadExtensionCode/Shan.code-settings-sync	1635740275911	1757	18772
```

## Node Cached Data Stats


### cached data used


### cached data missed


### cached data rejected


### cached data created (lazy, might need refreshes)


