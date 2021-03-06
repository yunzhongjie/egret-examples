//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////


class TitleWindowScreen extends egret.gui.SkinnableComponent {

    public constructor() {
        super();
        this.skinName = "screenContentSkins.TitleWindowScreenSkin";
    }

    public button:egret.gui.Button;
    public partAdded(partName: string, instance: any): void
    {
        super.partAdded(partName,instance);
        if(instance == this.button)
        {
            this.button.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickHandler,this);
        }
    }

    private clickHandler():void {
        var window:egret.gui.TitleWindow=new egret.gui.TitleWindow();
        window.title="TitleWindow";
       var label:egret.gui.Label=new egret.gui.Label();
        label.horizontalCenter=label.verticalCenter=0;
        label. fontFamily="Tahoma";
       label.size=22;
        label.textColor=0x727070;
        label.text="This is TitleWindow";
        window.addElement(label);
        window.addEventListener(egret.gui.CloseEvent.CLOSE,this.windowClose,window);
        egret.gui.PopUpManager.addPopUp(window,true,true);
    }
    private windowClose(event:egret.gui.CloseEvent):void
    {
        egret.gui.PopUpManager.removePopUp(this);
    }
}