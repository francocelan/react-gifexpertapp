import { getGifts } from "../../helpers/getGifs"


describe("Pruebas con getGifs Fecth", () => {

    test("debe de traer 10 elementos", async() => {

       const gifs = await getGifts("One Punch");
       expect( gifs.length ).toBe(10)
    })

    test("Cuando no tenemos categorias", async() => {

        const gifs = await getGifts("");
        expect( gifs.length ).toBe(0)
     })

})