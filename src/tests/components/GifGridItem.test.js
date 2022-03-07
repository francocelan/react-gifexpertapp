import React from "react";
import {shallow} from "enzyme";
import { GifGridItem } from "../../components/GifGridItem.js";

describe("Pruebas en <GifGridItem />", () => {

    const title = "Un titulo";
    const url = "https://localhost/algo.jpg";
    const wrapper = shallow(<GifGridItem title={title} urlGif={url} />);

    test("debe de mostrar el componente correctamente",() => {

        expect( wrapper ).toMatchSnapshot();
       
    })
    test("debo de tener un parrafo con el title",() => {
        const p = wrapper.find("p");
        expect( p.text().trim() ).toBe(title);
    })

    test("debe de tener la imagen igual al url y alt de los props",() => {
        const imagen = wrapper.find("img");
        expect( imagen.props().src ).toBe(url);
        expect( imagen.props().alt ).toBe(title);
    })

    test("debe de tener una clase llamada 'animate_fadeIn'",() => {
        const div = wrapper.find("div");
        const classees = div.props().className;
        expect( classees.includes("animate__fadeIn")).toBe(true);
    })

})