export function createCon(name, member) {
    if(!name) {
        return {
            hasError: true,
            name: 'Name cannot be empty!'
        };
    }

    const conDoc = {
        name: name,
        members: [firebase.auth().currentUser.email, member]
    };
    // console.log(db); 
    db.collection("conversations").add(conDoc);
}

export function sendMsg(content, conId) {
    if(!content) {
        return;
    }

    const mesDoc = {
        content: content,
        conId: conId,
        sender: {
            email: firebase.auth().currentUser.email,
            displayName: firebase.auth().currentUser.displayName,
        },
    };

    db.collection("messages").add(mesDoc);
}