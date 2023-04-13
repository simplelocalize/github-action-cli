"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
// import * as github from '@actions/github'
const exec = __importStar(require("@actions/exec"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cliVersion = core.getInput('cli-version', { required: true });
            // const command: string = core.getInput('command', {required: true})
            // const apiKey: string = core.getInput('api-key')
            // const downloadPath: string = core.getInput('download-path')
            // const downloadFormat: string = core.getInput('download-format')
            // const downloadOptions: string = core.getInput('download-options')
            // const uploadPath: string = core.getInput('upload-path')
            // const uploadFormat: string = core.getInput('upload-format')
            // const uploadOptions: string = core.getInput('upload-options')
            // const hasDryRunFlag: boolean = core.getBooleanInput('dry-run')
            // const hasDeleteFlag: boolean = core.getBooleanInput('delete')
            // const hasOverwriteFlag: boolean = core.getBooleanInput('overwrite')
            //
            // const customArguments: string = core.getInput('args')
            //
            // const customerIds: string = core.getInput('customer-ids')
            yield exec.exec(`curl -s https://get.simplelocalize.io/${cliVersion}/install | bash`);
            yield exec.exec('simplelocalize status');
            const time = new Date().toTimeString();
            core.setOutput('time', time);
            // Get the JSON webhook payload for the event that triggered the workflow
            // const payload = JSON.stringify(github.context.payload, undefined, 2)
            // console.log(`The event payload: ${payload}`)
        }
        catch (error) {
            if (error instanceof Error)
                core.setFailed(error.message);
        }
    });
}
run();
