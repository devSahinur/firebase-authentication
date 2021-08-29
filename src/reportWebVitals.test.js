const reportWebVitals = require("./reportWebVitals")
// @ponicode
describe("reportWebVitals.default", () => {
    test("0", () => {
        let callFunction = () => {
            reportWebVitals.default("commit 03ccef2ffa982df061ae86ca8730cd9ad0af05b3\r\nAuthor: Ladarius Zboncak <Ricky.Schultz37@hotmail.com>\r\nDate: Wed Jul 28 2021 16:52:11 GMT+0200 (Central European Summer Time)\r\n\r\n    program wireless program\r\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            reportWebVitals.default("commit 380428b6b61b64631d941b27db3e91df27bfff8e\r\nAuthor: Lera Swift <Lela.Lubowitz@yahoo.com>\r\nDate: Wed Jul 28 2021 23:21:29 GMT+0200 (Central European Summer Time)\r\n\r\n    reboot digital application\r\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            reportWebVitals.default("commit d3f6bf9bcee016096098e88aced2d5afdc68c424\r\nAuthor: Edna Rice <Shanie.Pagac@yahoo.com>\r\nDate: Wed Jul 28 2021 22:05:49 GMT+0200 (Central European Summer Time)\r\n\r\n    bypass cross-platform hard drive\r\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            reportWebVitals.default("commit e6d1117d97e7cc250166120d2eee1c2662c58150\r\nAuthor: Keagan Cole <Crystal69@gmail.com>\r\nDate: Thu Jul 29 2021 05:36:16 GMT+0200 (Central European Summer Time)\r\n\r\n    override wireless alarm\r\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            reportWebVitals.default("commit f20ba84baadcbd1f3a45d95e9bb5aef588f4e902\r\nAuthor: Marty Douglas <Rubie_Boehm29@yahoo.com>\r\nDate: Thu Jul 29 2021 09:06:18 GMT+0200 (Central European Summer Time)\r\n\r\n    override solid state microchip\r\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            reportWebVitals.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
