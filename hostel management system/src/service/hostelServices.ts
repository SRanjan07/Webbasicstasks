import type { Rooms } from "../model/room.js";
import type { Resident } from "../model/residents.js";
import  { roomAvailability } from "../data/roomsDatas.js";

export class hostelService{
    private rooms: Rooms[]=[];
    private resident: Resident[]=[];
    constructor(){
        this.localData();
    }
    // this ids for loading the data
    localData():void{
        const storedRoooms = localStorage.getItem("rooms");
        const storedResidents = localStorage.getItem("residents");
        if(storedRoooms){
          this.rooms=JSON.parse(storedRoooms);
        }   
        else{
            this.rooms= roomAvailability;
        } 
        if(storedResidents){
            this.resident = JSON.parse(storedResidents);
        }
        else{
            this.resident =[];
        }
        console.log(this.rooms);
        console.log(this.resident);}
         
        //! Getters for rooms and residents
        get getRooms(){
            return this.rooms;
        }
        get getResidents(){
            return this.resident;
        }
        // storing the data
        saveData(){
            localStorage.setItem("rooms", JSON.stringify(this.rooms));
            localStorage.setItem("residents", JSON.stringify(this.resident));
        }
    //Add Resident
    addResident(
        name: string,
        age: number,
        phone: string,
        roomNumber: number,
        checkInDate: string,
    ){
        const room=this.rooms.find((r)=>r.roomNumber === roomNumber);//itreating over room of array 
         if(!room){
            throw new Error("ROom doesnt exist");
         }else if(room.isOccupied){
            throw new Error("Room is already occupied");
         }
         const newResident: Resident = {
            id:Date.now().toString(),
            name:name,
            age:age,
            phone:phone,
            roomNumber:roomNumber,
            checkIndate:checkInDate,
         };
         this.resident.push(newResident);
         room.isOccupied=true;
         this.saveData();
         console.log(this.rooms);
         console.log(this.resident); 

        }
        // Deleting Resident
        removeResident(residentID: string){
            const index=this.resident.findIndex((r)=>r.id=== residentID);
            if(index== -1){
                throw new Error("Resident ID doesn't exist");
            }
            const residnt = this.resident[index]!;
            const room = this.rooms.find((r) => r.roomNumber == residnt.roomNumber);
            if(!room){
                throw new Error("room doesn't exist");
            }
            room.isOccupied = false;
            this.resident.splice(index,1);
            this.saveData();
        }

        //get vaccant rooms
        getVacantRooms(){
            return this.rooms.filter((r)=>!r.isOccupied);
        
        }
        //get occupied rooms
        getOccupiedRooms(){
            return this.rooms.filter((r)=>r.isOccupied);
        }
       // Room state
      getRoomStates(){
      const total = this.rooms.length;
      const occupied = this.getOccupiedRooms().length;
      const vacant = total - occupied;
      return { total, occupied, vacant };
     }

        //update resident
    updateResident(
            residentID: string,
            updates: Partial<Omit<Resident, "id">>
        ){
            const index = this.resident.findIndex(r => r.id === residentID);
            if(index === -1){
                throw new Error("Resident ID doesn't exist");
            }

            const existing = this.resident[index]!;
            const oldRoomNum = existing.roomNumber;
            const newRoomNum = updates.roomNumber ?? oldRoomNum;

            // if changing rooms, ensure new room exists and is free
            if(newRoomNum !== oldRoomNum){
                const newRoom = this.rooms.find(r => r.roomNumber === newRoomNum);
                if(!newRoom){
                    throw new Error("New room doesn't exist");
                }
                if(newRoom.isOccupied){
                    throw new Error("New room is already occupied");
                }
                // free old room and occupy new one
                const oldRoom = this.rooms.find(r => r.roomNumber === oldRoomNum);
                if(oldRoom){
                    oldRoom.isOccupied = false;
                }
                newRoom.isOccupied = true;
                existing.roomNumber = newRoomNum;
            }

            // update other fields
            if(updates.name !== undefined) existing.name = updates.name;
            if(updates.age !== undefined) existing.age = updates.age;
            if(updates.phone !== undefined) existing.phone = updates.phone;
            if(updates.checkIndate !== undefined) existing.checkIndate = updates.checkIndate;

            this.resident[index] = existing;
            this.saveData();
        }
    }