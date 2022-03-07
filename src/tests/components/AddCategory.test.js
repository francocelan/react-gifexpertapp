import React from "react";
import {shallow} from "enzyme";
import { AddCategory } from "../../components/AddCategory.js";

describe("Pruebas en <AddCategory />", () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach( () => { // Usamos beforeEach para ejecutar todo lo que necesito que se reinicialice, que se limpie
        jest.clearAllMocks(); // Para utiliza por si teniamos una simulacion de algo que todo se limpie 
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> ); // Con esto reseteo mi componente
    });

    test("debe de mostrarse correctamente",() => {

        expect( wrapper ).toMatchSnapshot();
       
    })

    test("debe de cambiar la caja de texto",() => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change',{ 
            target: {
                value:value
            }
         }); 
        // input.simulate('change', { target: { value } });
         expect( wrapper.find('p').text().trim() ).toBe( value );
       
    })

    test('NO debe de postear la informacion con submit',() => {

        wrapper.find('form').simulate('submit', { preventDefault(){}} );

        expect(setCategories).not.toHaveBeenCalled();
        
    })

    test("debe de llamar el  setCategories y limpiar la caja de texto",() => {
        // 1. simular el inputChange
        const input = wrapper.find('input');
        const value = 'Hola soy un inputChange';
        input.simulate('change',{ 
            target: {
                value:value
            }
         });
        // 2. simular el submit
        
        wrapper.find('form').simulate('submit', { preventDefault(){}} );

        // 3. setCategories se debe de haber llamado 1 sola vez
       expect(setCategories).toHaveBeenCalled();

        // 4. el valor del input.inputEvaluacion debe de estar con un string vacio ''
        expect(input.text().trim()).toBe("");
    })

})