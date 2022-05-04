const Ajolonauta = require("../app/ajolonauta");

describe("Prueba de unicad de Ajolonauta", () =>{
    test('Caso de prueba 1: Creacion de objeto', () =>{
        const woopa = new Ajolonauta("Woopa")
        expect(woopa.name).toBe("Woopa");
    });
})