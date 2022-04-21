(function () {
  var state$ = window.PEX.pluginAPI.createNewState({});
  var displayname;
  var vmr;
  var role;
  var servicetype;

  function load(participants$, conferenceDetails$) {
    console.log('Change Layout Plugin', 'Loaded');

    window.PEX.actions$
      .ofType('[Conference] Connect Success')
      .subscribe((action) => {
        displayname = action.payload.displayName;
        vmr = action.payload.alias;
        role = action.payload.joinRole;
        servicetype = action.payload.serviceType;
      });
  }

  function changeLayout(conferenceDetails) {
    if (servicetype == 'conference' && role == 'HOST') {
      PEX.pluginAPI.openTemplateDialog({
        title: 'VMR Layout control',
        body: `<div id="layout-info" style="flex-wrap: wrap; justify-content: center;">
                <div style="margin: 10px;">
                    <span>Host layout</span><br>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: '4:0'});">Equal</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: '1:0'});">1+0</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: '1:7'});">1+7</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: '2:21'});">2+21</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: '1:33'});">1+33</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: 'ac'});">Adaptive Composition</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({});">Default layout</button>
                </div>
                <div style="margin: 10px;"><br><br>
                    <span>Other controls</span><br>
                    <button class="dialog-button blue-action-button" onclick="window.PEX.pluginAPI.transformConferenceLayout({enable_overlay_text: true});">Show names</button>
                    <button class="dialog-button blue-action-button" onclick="window.PEX.pluginAPI.transformConferenceLayout({enable_overlay_text: false});">Hide names</button>
                    <button class="dialog-button blue-action-button" onclick="window.PEX.pluginAPI.transformConferenceLayout({enable_active_speaker_indication: true});">Enable active speaker</button>
                    <button class="dialog-button blue-action-button" onclick="window.PEX.pluginAPI.transformConferenceLayout({enable_active_speaker_indication: false});">Disable active speaker</button>
                </div>
            </div>`,
      });
    }

    if (servicetype == 'lecture' && role == 'HOST') {
      PEX.pluginAPI.openTemplateDialog({
        title: 'VA Layout control',
        body: `<div id="layout-info" style="flex-wrap: wrap; justify-content: center;">
                <div style="margin: 10px;">
                    <span>Host layout</span><br>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: '4:0'});">Equal</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: '1:0'});">1+0</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: '1:7'});">1+7</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: '2:21'});">2+21</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: '1:33'});">1+33</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({layout: 'ac'});">Adaptive Composition</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({});">Default layout</button>
                </div>
                <div style="margin: 10px;">
                    <span>Guest layout</span><br>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({guest_layout: '4:0'});">Equal</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({guest_layout: '1:0'});">1+0</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({guest_layout: '1:7'});">1+7</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({guest_layout: '2:21'});">2+21</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({guest_layout: '1:33'});">1+33</button>
                    <button class="dialog-button blue-action-button" style="border-radius: 10px; min-width: 0px;" onclick="window.PEX.pluginAPI.transformConferenceLayout({guest_layout: 'ac'});">Adaptive Composition</button>
                </div>
                <div style="margin: 10px;"><br><br><br>
                    <span>Other controls</span><br>
                    <button class="dialog-button blue-action-button" onclick="window.PEX.pluginAPI.transformConferenceLayout({enable_overlay_text: true});">Show names</button>
                    <button class="dialog-button blue-action-button" onclick="window.PEX.pluginAPI.transformConferenceLayout({enable_overlay_text: false});">Hide names</button>
                    <button class="dialog-button blue-action-button" onclick="window.PEX.pluginAPI.transformConferenceLayout({enable_active_speaker_indication: true});">Enable active speaker</button>
                    <button class="dialog-button blue-action-button" onclick="window.PEX.pluginAPI.transformConferenceLayout({enable_active_speaker_indication: false});">Disable active speaker</button>
                </div>
            </div>`,
      });
    }

    if (role == 'guest') {
      PEX.pluginAPI.openTemplateDialog({
        title: 'Layout control',
        body: `<div id="layout-info" style="flex-wrap: wrap; justify-content: center;">
                  You need to be a host to change the layout
                </div>`,
      });
    }
  }

  function unload() {
    console.log('Change Layout Plugin', 'Unloaded');
  }

  PEX.pluginAPI.registerPlugin({
    id: 'change-layout-plugin-1.0',
    load: load,
    unload: unload,
    changeLayout: changeLayout,
    state$: state$,
  });
})();
