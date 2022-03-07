import React from "react";
import {shallow} from "enzyme";
import { GifGrid } from "../../components/GifGrid.js";
import { useFetchGifs } from "../../hooks/useFetchGifs.js";
jest.mock('../../hooks/useFetchGifs.js');

describe("Pruebas en <GifGrid />", () => {

    const category = "Argentina";

    test("Hacemos snapshot del componente GifGrid",() => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading:true
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect( wrapper ).toMatchSnapshot();
       
    })

    test("debe de mostrar items cuando se cargan imagenes useFetchGifs",() => {

        const gifs = [{
            id:"ABC",
            urlGif:"https://localhost/cualquier/cosa.jpg",
            title:"Cualquier cosa"
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading:false
        });

        const wrapper = shallow(<GifGrid category={category} />);
       
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);

    })


})