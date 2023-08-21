import { Grid } from "@chakra-ui/react";
import Room from "./Room";
import RoomLoading from "./RoomLoading";
import { useEffect, useState } from "react";

interface IRoom {
    "pk": number;
    "name": string;
    "country": string;
    "city": string;
    "price": number;
    "rating": number;
    "is_owner": boolean;
    "is_liked": boolean;
    "photos": IPhoto[],
    "review_count": number;
}

interface IPhoto {
    "pk": number;
    "file": string;
    "description": string;
}

export default function Rooms() {
    // Fetching from Server
    const [isLoading, setIsLoading] = useState(true);
    const [rooms, setRooms] = useState([]);
    const fetchRooms = async () => {
        const response = await fetch("http://localhost:8000/api/v1/rooms/");
        const json = await response.json();
        setRooms(json);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchRooms();
    }, []);

    return (
        // <Grid templateColumns={"repeat(5, 1fr)"} columnGap={4} rowGap={8}>
        <Grid templateColumns={
            {
                // base : 모바일 사용자를 위한 value
                // base: "1fr",
                sm: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(5, 1fr)",
                "2xl": "repeat(8, 1fr)",
            }
        } columnGap={4} rowGap={8}>
            {
                isLoading ?
                    <>
                        <RoomLoading />
                        <RoomLoading />
                        <RoomLoading />
                        <RoomLoading />
                        <RoomLoading />
                        <RoomLoading />
                        <RoomLoading />
                        <RoomLoading />
                        <RoomLoading />
                        <RoomLoading />
                    </>
                    : null
            }
            {rooms.map((room:IRoom) => (
                <Room 
                    imageUrl={room.photos.length > 0 ? room.photos[0].file : ""}
                    name={room.name}
                    city={room.city}
                    country={room.country}
                    price={room.price}
                    rating={room.rating} reviewCount={room.review_count} />
            ))}

        </Grid>
    );
}