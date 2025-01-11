const employees = [
    {
      "id": 1,
      "email": "e@e.com",
      "password": "123",
      "firstName": "John",
      "tasks": [
        {
          "taskId": 1,
          "title": "Task 1",
          "date": "2025-01-10",
          "description": "Complete the documentation for the new project.",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completeTask": false,
          "failTask": false
        },
        {
          "taskId": 2,
          "title": "Task 2",
          "date": "2025-01-11",
          "description": "Review the last week's sprint progress.",
          "category": "Review",
          "active": false,
          "newTask": false,
          "completeTask": true,
          "failTask": false
        },
        {
          "taskId": 3,
          "title": "Task 3",
          "date": "2025-01-12",
          "description": "Prepare the meeting agenda for the upcoming team meeting.",
          "category": "Meeting Preparation",
          "active": true,
          "newTask": true,
          "completeTask": false,
          "failTask": false
        }
      ],
      "taskCount": {
        "active": 2,
        "newTask": 2,
        "completeTask": 1,
        "failTask": 0
      }
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "firstName": "Alice",
      "tasks": [
        {
          "taskId": 1,
          "title": "Task 1",
          "date": "2025-01-10",
          "description": "Write unit tests for the new feature.",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completeTask": false,
          "failTask": false
        },
        {
          "taskId": 2,
          "title": "Task 2",
          "date": "2025-01-11",
          "description": "Conduct a code review for the recent pull requests.",
          "category": "Review",
          "active": true,
          "newTask": false,
          "completeTask": false,
          "failTask": true
        },
        {
          "taskId": 3,
          "title": "Task 3",
          "date": "2025-01-12",
          "description": "Write a performance report on the application.",
          "category": "Reporting",
          "active": false,
          "newTask": false,
          "completeTask": true,
          "failTask": false
        },
        {
          "taskId": 4,
          "title": "Task 4",
          "date": "2025-01-13",
          "description": "Prepare release notes for the new version of the app.",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completeTask": false,
          "failTask": false
        }
      ],
      "taskCount": {
        "active": 3,
        "newTask": 2,
        "completeTask": 1,
        "failTask": 1
      }
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "firstName": "Bob",
      "tasks": [
        {
          "taskId": 1,
          "title": "Task 1",
          "date": "2025-01-10",
          "description": "Investigate bugs reported by the QA team.",
          "category": "Bug Fixing",
          "active": true,
          "newTask": true,
          "completeTask": false,
          "failTask": false
        },
        {
          "taskId": 2,
          "title": "Task 2",
          "date": "2025-01-11",
          "description": "Test the newly implemented features on the staging environment.",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completeTask": true,
          "failTask": false
        },
        {
          "taskId": 3,
          "title": "Task 3",
          "date": "2025-01-12",
          "description": "Review and merge the open pull requests.",
          "category": "Code Review",
          "active": true,
          "newTask": false,
          "completeTask": false,
          "failTask": true
        },
        {
          "taskId": 4,
          "title": "Task 4",
          "date": "2025-01-13",
          "description": "Work on the new API integration.",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completeTask": false,
          "failTask": false
        }
      ],
      "taskCount": {
        "active": 3,
        "newTask": 2,
        "completeTask": 1,
        "failTask": 1
      }
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "firstName": "Eve",
      "tasks": [
        {
          "taskId": 1,
          "title": "Task 1",
          "date": "2025-01-10",
          "description": "Prepare the marketing strategy for the upcoming product launch.",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completeTask": false,
          "failTask": false
        },
        {
          "taskId": 2,
          "title": "Task 2",
          "date": "2025-01-11",
          "description": "Conduct a survey for customer feedback on the new product.",
          "category": "Customer Feedback",
          "active": true,
          "newTask": false,
          "completeTask": true,
          "failTask": false
        },
        {
          "taskId": 3,
          "title": "Task 3",
          "date": "2025-01-12",
          "description": "Create a press release for the upcoming event.",
          "category": "Public Relations",
          "active": false,
          "newTask": false,
          "completeTask": true,
          "failTask": false
        },
        {
          "taskId": 4,
          "title": "Task 4",
          "date": "2025-01-13",
          "description": "Design promotional material for the new product.",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completeTask": false,
          "failTask": false
        },
        {
          "taskId": 5,
          "title": "Task 5",
          "date": "2025-01-14",
          "description": "Coordinate with influencers for the product promotion.",
          "category": "Influencer Marketing",
          "active": false,
          "newTask": false,
          "completeTask": true,
          "failTask": false
        }
      ],
      "taskCount": {
        "active": 3,
        "newTask": 2,
        "completeTask": 2,
        "failTask": 0
      }
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "firstName": "Charlie",
      "tasks": [
        {
          "taskId": 1,
          "title": "Task 1",
          "date": "2025-01-10",
          "description": "Design the UI for the new feature.",
          "category": "UI Design",
          "active": true,
          "newTask": true,
          "completeTask": false,
          "failTask": false
        },
        {
          "taskId": 2,
          "title": "Task 2",
          "date": "2025-01-11",
          "description": "Write documentation for the new UI components.",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completeTask": true,
          "failTask": false
        },
        {
          "taskId": 3,
          "title": "Task 3",
          "date": "2025-01-12",
          "description": "Fix accessibility issues on the website.",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completeTask": false,
          "failTask": false
        },
        {
          "taskId": 4,
          "title": "Task 4",
          "date": "2025-01-13",
          "description": "Implement performance improvements for the app.",
          "category": "Performance Optimization",
          "active": true,
          "newTask": false,
          "completeTask": false,
          "failTask": true
        },
        {
          "taskId": 5,
          "title": "Task 5",
          "date": "2025-01-14",
          "description": "Prepare a performance report for the stakeholders.",
          "category": "Reporting",
          "active": true,
          "newTask": true,
          "completeTask": false,
          "failTask": false
        },
        {
          "taskId": 6,
          "title": "Task 6",
          "date": "2025-01-15",
          "description": "Refactor the old codebase.",
          "category": "Code Maintenance",
          "active": false,
          "newTask": false,
          "completeTask": true,
          "failTask": false
        }
      ],
      "taskCount": {
        "active": 3,
        "newTask": 2,
        "completeTask": 2,
        "failTask": 1
      }
    }
  ];
  
  
  

   const admin=[ {
      "id": 6,
      "firstName":"Ashoka",
      "email": "admin@example.com",
      "password": "123"
    }
]
  

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}


export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
    

}
