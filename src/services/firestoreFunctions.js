import firebase from '../firebase';

// FONCTION POUR ECRIRE DANS LA BDD
function firebaseWrite(field, value, roomID) {
    const db = firebase.firestore();
    var data = {};
    data[field] = value;
    db.collection('Room').doc(roomID).update(data);
}

// ASYNC FUNCTION TO UPDATE DATABASE
async function updateBatch(db, roomID, dataToBatch) {    
    const batch = db.batch();

    const sfRef = db.collection('Room').doc(roomID);
    sfRef.update(dataToBatch);

    await batch.commit();
}

// FONCTION DE CREATION D'UNE ROOM
function firebaseCreateRoom() {
    const db = firebase.firestore();
    const query = db.collection('Room').doc();
    query.set({
        pitch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        isReady: true,
        hasBegin: false,
        step: 0,
        team : {
            name: '',
            score: 0,
            trophies : {
                t1 : {
                    id : 1,
                    active : false
                },
                t2 : {
                    id : 2,
                    active : false
                },
                t3 : {
                    id : 3,
                    active : false
                }
            },
        },
        player : {
            p1: {
                active : false,
                id : 1,
                pseudo : '',
                characterId : 0,
                score : 0,
                zone : 0
            },
            p2: {
                active : false,
                id : 2,
                pseudo  :'',
                characterId : 0,
                score : 0,
                zone : 0
            },
            p3: {
                active : false,
                id : 3,
                pseudo : '',
                characterId : 0,
                score : 0,
                zone : 0
            },
            p4: {
                active : false,
                id : 4,
                pseudo : '',
                characterId : 0,
                score : 0,
                zone : 0
            },
        },
        cursors: {
            values: {
                1: "pink",
                2: "yellow",
                3: "red",
                4: "blue",
                5: "green"
            },
            validationArray: ["pink", "yellow", "red", "blue", "green"]
        },
        quests : {
            q1 : {
                id : 1,
                active : 0,
                onAchieve : 1
            },
            q2 : {
                id : 2,
                active : 0,
                onAchieve : 2,
            },
            q3 : {
                id : 3,
                active : 0,
                onAchieve : 3
            }
        },
        itemsActive : {
            i1 : 0,
            i2 : 0,
            i3 : 0,
            i4 : 0
        },
        houseSettings : {
            glitch : {
                isActive : false,
                p1 : false,
                p2 : false,
                p3 : false,
                p4 : false,
            },
            lights : {
                isActive : false
            },
            airConditioning : {
                isActive : false
            },
            roomLocked : {
                canTrap : false,
                locked : false,
                characterLocked : 0
            },
            vacuum : {
                roomId : 2,
                gavePuzzle : false
            },
            timer : {
                isActive: false,
                // Add date --> startTimer: '',
            },
        }
    });
    var roomID = query.id;
    return roomID;
}

export default {
    firebaseWrite,
    firebaseCreateRoom,
    updateBatch
}