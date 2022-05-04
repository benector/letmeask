import { useState, useEffect } from "react";
import { database } from "../../services/firebase";
import { useAuth } from '../../hooks/useAuth';
import { PageLayout } from "../../layouts/Page";
import { RoomLayout } from "../../layouts/Room";


export function MyRooms(){
  
    return(
        <PageLayout>
            <h1>My rooms</h1>
        </PageLayout>
    )
}