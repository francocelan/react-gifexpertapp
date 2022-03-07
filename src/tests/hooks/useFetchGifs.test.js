import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifs", () => {


    test("debe de retornar el estado inicial", async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current;
        
        await waitForNextUpdate();

        expect( data ).toEqual([]); // Verificamos que Nuestro array debe venir vacio
        expect( loading ).toBe(true);// Verificamos que Nuestro loading debe estar en true

    })

    test("Debe de retornar un arreglo de imgs y el loading en false", async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;
        

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    })

})