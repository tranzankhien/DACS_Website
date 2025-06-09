import React from 'react'
import { Col, Image, Row } from 'antd'
import imageProduct from '../../assets/images/sp.webp'
import imageProductSmall from '../../assets/images/spsmall.webp'
import { WrapperAddress, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
    const onChange = () => { }
    return (
        <Row style={{ padding: '16px', background: '#fff', borderRadius: '4px' }}>
            <Col span={10} style={{ borderRight: '1px solid #e5e5e5', paddingRight: '8px' }}>
                <Image src={imageProduct} alt='image product' preview={false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false} />
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt='image product small' preview={false} />
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{ paddingLeft: '10px' }}>
                <WrapperStyleNameProduct>Sữa Lúa Mạch Nestlé MILO Teen Protein Canxi (24 x 210ml)</WrapperStyleNameProduct>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(255, 196, 0)' }} />
                    <WrapperStyleTextSell> | Đã bán 1000+ </WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct style={{ color: 'rgb(255, 66, 78)' }}>200.000<sup>₫</sup></WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddress>
                    <span>Giao đến </span>
                    <span className='address'>Q. 1, P. Bến Nghé, Hồ Chí Minh</span> -
                    <span className='change-address'>Đổi địa chỉ</span>
                </WrapperAddress>
                <div style={{ margin: '10px 0 20px', padding: '10px 0', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
                    <div style={{ marginBottom: '6px' }}>Số lượng</div>
                    <WrapperQualityProduct>
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <MinusOutlined style={{ color: '#000', fontSize: '20px' }} size="10" />
                        </button>
                        <WrapperInputNumber defaultValue={1} onChange={onChange} size="small" />
                        <button style={{ border: 'none', background: 'transparent' }}>
                            <PlusOutlined style={{ color: '#000', fontSize: '20px' }} size="10" />
                        </button>
                    </WrapperQualityProduct>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <ButtonComponent
                        size={49}
                        style={{ background: 'rgb(255, 66, 78)', height: '48px', width: '220px', border: 'none', borderRadius: '4px' }}
                        textButton={'Chọn mua'}
                        styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}
                    ></ButtonComponent>
                    <ButtonComponent
                        size={49}
                        style={{ background: '#fff', height: '48px', width: '220px', border: '1px solid rgb(13, 92, 182)', borderRadius: '4px' }}
                        textButton={'Mua trả sau'}
                        styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
                    ></ButtonComponent>
                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailComponent