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
