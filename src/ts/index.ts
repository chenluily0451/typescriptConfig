import {UserInter} from "./interface/UserInter";
import $ from 'jquery'

$(document).ready(function () {
    console.log("jq init")
});

class Information implements UserInter{
    isLogin(name: string): boolean {
        return !!name ? true : false
    }
}

const info = new Information()
console.log("ts:",info.isLogin("0"))
