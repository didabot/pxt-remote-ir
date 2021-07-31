
//% color=#009ede icon="\uf110"
namespace Modou_IR {

    /**
    * initialize ir module.
    */
    //% blockId=modou_ir_set_port
    //% block="connect ir to port |%pin|"
    //% shim=Modou_IR::initIR
    export function initIR(pin: Pins): void {
        return
     }
    
    /**
    * set button pressed event handler.
    */
    //% blockId=modou_ir_button_pressed_event
    //% block="on button |%btn| pressed"
    //% shim=Modou_IR::onPressEvent
    export function onPressEvent(btn: RemoteButton, body: Action): void { 
        return
    }
}