import { $ } from "./$"

export const cleanApp = async () => {
    const app = $('#app')
    app.innerHTML = ''
}