
Search(toFind)
    {
        let current = this.head
        let Found = false
        if(current === null)
        {
            console.log("The linked List is empty, First Add something !!!")
            return
        }
        else
        {
            let nodeCount = 0;
            while(current)
            {
                
                if(current.data === toFind)
                {
                    console.log(current.data + ' Found at node ' + nodeCount)
                    Found = true
                    break
                }
                else{
                    current = current.next
                    nodeCount++
                }
            }
        }


delete(toDel)
{
    let current = this.head
    let Found = false
    if(current == null)
    {
        console.log("The linked List is empty , First Add Something!!!")
        return
    }
    else
    {
        while(current !== null)
        {
            if(current.data === toDel && current ===this.head)
            {
                this.head = current.next
                current = undefined
                break
            }
            else if(current.next.data === toDel)
            {
                let toDel = current.next
                current.next = current.next.next
                toDel = undefined
                break
            }
            else{
             current = current.next
            }
            
        }
        if(!Found)
        {
            console.log('The Number you are trying to delete is not in the list')
        }
    }
}

add(NewNode)
    {
        let start = this.head
        if(start === null)
        {
            this.head = NewNode
        }
        else{
        let current = start
        while(current.next)
        {
            current = current.next
        }
        current.next = NewNode
    }
    }

    print()
    {
        let current = this.head
        if(current === null){
            console.log('Nothing In the List')
        }
        else{
            while(current)
            {
                console.log(current.data)
                current = current.next
            }
        }
    }


