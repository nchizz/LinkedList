class LinkedList{
    constructor(){
        this.head = null      ///first element
        this.tail = null      /// last element
    }
    append(data){       /// add element in the end      
        const node ={data,next:null}
        
        if(this.tail){
            this.tail.next = node
        }        
        if(!this.head){
            this.head = node
        }
        this.tail = node
    }
    prepend(data){
        const node = {data, next: this.head}
        this.head = node
        if(!this.tail){
            this.tail=node
        }
    }
}
const list = new LinkedList()
list.append('23')
list.append('42')
list.prepend('1')
list // 