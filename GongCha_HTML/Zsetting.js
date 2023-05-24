//Zsetting.js
export class GetSetting{
    execute() {
        let tag = "";
        tag +=
        `
        table,tr,td{
            border-collapse:collapse;
            border: 1px solid aqua;
        }
        a{
            text-decoration-line: none;
        }
        `;
        return tag;
    }
}