import tkinter as ttk 
from tkinter import *
import requests as req
import json


root = ttk.Tk()
root.title('testing scrolling')
root.geometry("800x600")

main_frame = Frame(root)
main_frame.pack(fill=BOTH, expand=1)

my_canvas = Canvas(main_frame)
my_canvas.pack(side=LEFT, fill=BOTH, expand=1)

my_scrollbar = ttk.Scrollbar(main_frame, orient=VERTICAL, command=my_canvas.yview)
my_scrollbar.pack(side=RIGHT, fill=Y)

my_canvas.configure(yscrollcommand=my_scrollbar.set)
my_canvas.bind('<Configure>', lambda e: my_canvas.configure(scrollregion = my_canvas.bbox("all")))

second_frame = Frame(my_canvas)

my_canvas.create_window((0, 0), window=second_frame, anchor="nw")

## for thing in range(100):
#   Button(second_frame, text=f'Button {thing}').grid(row=thing, column = 0, pady=1, padx=1)

def submit_text():
  input_text = text.get("1.0", 'end-1c')
  print("give info to backend using HTTPS request for normal author")
  ## greeting_display = tk.Text(height=10, width = 30)
  # greeting_display.grid(column=6, row = 1)
 # results.insert(tk.END, input_text)
  
  my_obj = {'text': input_text}
  response = req.post('http://writeprint.herokuapp.com/predict_proba', my_obj)
  
  parsedResponse = json.loads(response.text)
  print(json.dumps(parsedResponse, indent=4))

  sortedresponse = sorted(parsedResponse.items(), key = lambda x:x[1], reverse=True)

  for x in sortedresponse:
    print(x)
    
  results.insert('1.0', json.dumps(parsedResponse, indent=4))
  print('this worked')

def custom_authors():
  print("give info to backend using HTTPS request for custom author")

title = ttk.Label(second_frame, text="welcome to text-fingerprinting").grid(row=1)
subtitle = ttk.Label(second_frame, text="insert text in textbox to find if your text matches with anyone").grid(row=2)
info = ttk.Label(second_frame, text = "yellow is text you want to get checked").grid(row=3)
info1 = ttk.Label(second_frame, text = "for custom author insert training text for each author in red, green and orange text boxes. Then click custom authors").grid(row=4)

text = ttk.Text(second_frame, height = 4, width = 90, bg='yellow')
text.grid(row=5)

custom1 = ttk.Text(second_frame, height = 4, width = 50, bg='red')
custom1.grid(row=6)

custom2 = ttk.Text(second_frame, height = 4, width = 50, bg='green')
custom2.grid(row=7)

custom3 = ttk.Text(second_frame, height = 4, width = 50, bg='orange')
custom3.grid(row=8)

submit = ttk.Button(second_frame, text="Submit Text - check against our list", command = submit_text)
submit.grid(row=9)

results = ttk.Text(second_frame, height = 10, width = 50)
results.grid(row=11)

changeDir = ttk.Button(second_frame, text="Custom Authors - check against your list", command = custom_authors)
changeDir.grid(row=10)

root.mainloop()
