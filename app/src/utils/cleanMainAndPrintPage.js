import { $ } from "./$"

export const cleanMainAndPrintPage = (page, mainClass) => {
    const main = $('main')
    if (mainClass !== undefined) main.className = mainClass
    main.innerHTML = ''
    main.innerHTML += page()
}