class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}
class LinkedList{
    constructor(){
        this.head = null      ///first element
        this.tail = null      /// last element
    }
    append(data){       /// add element in the end      
        const node =new Node(data)
        
        if(this.tail){
            this.tail.next = node
        }        
        if(!this.head){
            this.head = node
        }
        this.tail = node
    }
    prepend(data){
        const node = new Node(data, this.head)
        this.head = node
        if(!this.tail) {
            this.tail = node
        }
    }
    toArray() {
        const output = []
        let current = this.head

        while(current) {
            output.push(current)
            current = current.next
        }
        return output
    }
}
const list = new LinkedList()
list.append('23')
list.append('42')
list.prepend('2')
console.log(list.toArray())