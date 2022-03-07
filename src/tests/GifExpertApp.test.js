import React from "react";
import {shallow} from "enzyme";
import GifExpertApp from "../GifExpertApp.js";
describe("Pruebas en <GifExpertApp />", () => {

    test("Hacemos snapshot del componente GifExpertApp",() => {

        const wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();
       
    });

    test("Debe de mostrar una lista de categorias final",() => {

        const categories = ['One Punch','Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find("GifGrid").length ).toBe(categories.length);
       
    })


})