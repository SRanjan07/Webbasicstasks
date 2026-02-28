import { roomAvailability } from "../data/roomsDatas.js";
export class hostelService {
    constructor() {
        this.rooms = [];
        this.resident = [];
        this.localData();
    }
    // this ids for loading the data
    localData() {
        const storedRoooms = localStorage.getItem("rooms");
        const storedResidents = localStorage.getItem("residents");
        if (storedRoooms) {
            this.rooms = JSON.parse(storedRoooms);
        }
        else {
            this.rooms = roomAvailability;
        }
        if (storedResidents) {
            this.resident = JSON.parse(storedResidents);
        }
        else {
            this.resident = [];
        }
        console.log(this.rooms);
        console.log(this.resident);
    }
    //! Getters for rooms and residents
    get getRooms() {
        return this.rooms;
    }
    get getResidents() {
        return this.resident;
    }
    // storing the data
    saveData() {
        localStorage.setItem("rooms", JSON.stringify(this.rooms));
        localStorage.setItem("reidents", JSON.stringify(this.resident));
    }
    //Add Resident
    addResident(name, age, phone, roomNumber, checkInDate) {
        const room = this.rooms.find((r) => r.roomNumber === roomNumber); //itreating over room of array 
        if (!room) {
            throw new Error("ROom doesnt exist");
        }
        else if (room.isOccupied) {
            throw new Error("Room is already occupied");
        }
        const newResident = {
            id: Date.now().toString().slice(0, 5),
            name: name,
            age: age,
            phone: phone,
            roomNumber: roomNumber,
            checkIndate: checkInDate,
        };
        this.resident.push(newResident);
        room.isOccupied = true;
        this.saveData();
        console.log(this.rooms);
        console.log(this.resident);
    }
}
//# sourceMappingURL=hostelServices.js.map