const memberInput =  document.querySelector('#member')
const container =  document.querySelector('#container')

const memberData = []

const loopHander = () => {
    container.innerHTML = ''
for (let item of memberData) {
    container.innerHTML += item.name
}
}


const submitHandler = () => {
   
    const member = {
        name: memberInput.value,
        vote:0
    }

    memberData.push(member)
    memberInput = ''

  console.log(memberData)
   
loopHander()
}

