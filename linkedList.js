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
