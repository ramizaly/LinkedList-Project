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