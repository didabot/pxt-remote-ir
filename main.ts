
//% color=#009ede icon="\uf110"
namespace Modou_IR_T {
    
    //% advanced=true shim=Modou_IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: Action): void {
        return;
    }

    /**
     * set button pressed event handler.
     */
    //% blockId=modou_ir_button_pressed_event_user
    //% block="on button |%btn| pressed"
    export function onPressEventUser(btn: RemoteButton, body: Action): void { 
            onPressEvent(btn, body);       
        }
}