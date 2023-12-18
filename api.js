import { initializeApp } from "firestore/app"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

const firebaseConfig = {

    apiKey: "AIzaSyAyZY8C2-RWpurdyEHAugkSzS3ZPuIx0Eg",
    authDomain: "vanlife-f99f6.firebaseapp.com",
    projectId: "vanlife-f99f6",
    storageBucket: "vanlife-f99f6.appspot.com",
    messagingSenderId: "232614920230",
    appId: "1:232614920230:web:7ef364702aae5561fe26e7"

}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(vans)
}

//export async function getVans(id) {
//    const url = id ? `/api/vans/${id}` : "/api/vans"
//    const res = await fetch(url)
//    if (!res.ok) {
//        throw {
//            message: "Failed to fetch vans",
//            statusText: res.statusText,
//            status: res.status
//        }
//    }
//    const data = await res.json()
//    return data.vans
//}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}