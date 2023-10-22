import React from 'react';
import { Image, Row } from 'react-bootstrap';
import banner2 from "../assets/body1/banner2/banner2.png";

const Banner2 = () => {
    return (
        <Row className='banner2_rowMain mt-5'> 
            <Image src={banner2} fluid/>

            <div className='banner2_content_block'>
                <div>SKIN</div>
                <div>
                    <p>
                    Sed dignissim quam nulla, at sodales elit venenatis at. In in fringilla.
                    </p>

                    <p>
                    Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..
                    </p>
                </div>
                <div>By Sarfraz Jasim - 29 July, 2023</div>
            </div>
        </Row>
    );
};

export default Banner2;