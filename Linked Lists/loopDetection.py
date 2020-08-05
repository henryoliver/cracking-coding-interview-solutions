def detectLoop(linkedList={}):
    '''
    Solution 1 - Set tracking

    Complexity Analysis
    O(n) time | O(n) space

    Detect a loop in the linked list and returns the node at the beginning of the loop

    dict: linkedList
    return: Node at the beginning of the detected loop
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False):
        print('Arguments should be a valid non-empty dictionary')
        return False

    nodesSet = set()
    currNode = linkedList

    while (currNode != None):
        if (str(currNode) in nodesSet):
            return currNode

        nodesSet.add(str(currNode))
        currNode = currNode['next']

    return None


def detectLoop(linkedList={}):
    '''
    Solution 2 - Parallel pointers (fast/slow)

    Complexity Analysis
    O(n) time | O(1) space

    Detect a loop in the linked list and returns the node at the beginning of the loop

    dict: linkedList
    return: Node at the beginning of the detected loop
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False):
        print('Arguments should be a valid non-empty dictionary')
        return False

    slowPointer = linkedList
    fastPointer = linkedList

    # Find meeting point
    while (fastPointer != None and fastPointer['next'] != None):
        if (slowPointer == fastPointer):
            break

        slowPointer = slowPointer['next']
        fastPointer = fastPointer['next']['next']

    # No meeting point
    if (fastPointer == None or fastPointer['next'] == None):
        return None

    # Move slow pointer to head and keep fast pointer at meeting point
    slowPointer = linkedList

    while (slowPointer != fastPointer):
        slowPointer = slowPointer['next']
        fastPointer = fastPointer['next']

    return fastPointer
