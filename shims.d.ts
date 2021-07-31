// Auto-generated. Do not edit.



    //% color=#009ede weight=10 
    //% icon="\uf1eb"
declare namespace IR {

    /**
     * initialize ir module.
     */
    //% blockId=modou_ir_set_port
    //% block="connect ir to port |%pin|" shim=IR::initIR
    function initIR(pin: Pins): void;

    /**
     * set button pressed event handler.
     */
    //% blockId=modou_ir_button_pressed_event
    //% block="on button |%btn| pressed" shim=IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;
}

// Auto-generated. Do not edit. Really.
