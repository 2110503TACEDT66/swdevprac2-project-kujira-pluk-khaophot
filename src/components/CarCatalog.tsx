import ProductCard from "./ProductCard";
import { CarItem, CarJson } from "../../interfaces"

export default async function CarCatalog({carJson}:{carJson:CarJson}) {
    const carJsonReady = await carJson
    return (
        <>
        <div className="flex flex-col mt-24">
            {
                carJsonReady.data.map((carItem:CarItem)=>(
                    <ProductCard carName={carItem.car} ownername={carItem.name} 
                    ownerAddress={carItem.address} carId={carItem._id} imgSrc={carItem.picture}/>
                    )
                )
            }
        </div>
        </>
    )
}