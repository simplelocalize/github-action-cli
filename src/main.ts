import * as core from '@actions/core'
// import * as github from '@actions/github'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    const cliVersion: string = core.getInput('cli-version', {required: true})
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

    await exec.exec(
      `curl -s https://get.simplelocalize.io/${cliVersion}/install | bash`
    )
    await exec.exec('simplelocalize status')

    const time = new Date().toTimeString()
    core.setOutput('time', time)
    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
