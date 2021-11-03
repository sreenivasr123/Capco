import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../../Component/Button/Button';
import Checkbox from '../../Component/Checkbox/Checkbox';
import CustomTable from '../../Container/CustomTable/CustomTable';
import { request } from '../../Utils/request'
import './Home.scss'
export default function Home() {

    const [getData, setData] = useState("");
    const [isChecked, setchecked] = useState(false);

    useEffect(async () => {
        fetchData()
    }, []);


    const fetchData = async (getPage) => {
        const result = await axios(
            `${request}/payments?pagelndex=${getPage}`,
            
        );
        const response = result.data
        setData(response);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }


    const BtnHAndler = () => {
        const metaData = getData.metaDatal
        fetchData(metaData.nextPageIndex)
    }

    const CheckboxHandler = () => {
        setchecked(!isChecked)
    }


    const data = getData.results
    const filter = data && data.filter(character => character.paymentStatus === 'P');

    return (
        <div className="Home">
            <Checkbox checked={isChecked} CheckboxHandler={(e) => CheckboxHandler(e)} />
            <CustomTable filter={isChecked} info={isChecked && filter || data} />
            <Button value="Next" BtnHAndler={() => BtnHAndler()} />
        </div>
    )
}
