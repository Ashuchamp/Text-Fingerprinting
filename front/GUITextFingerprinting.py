

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
offset = 1
customList = []
def submit_text():
  
  #results = ttk.Text(second_frame, height = 20, width = 50)
  input_text = text.get("1.0", 'end-1c')
  if(len(input_text) == 0):
    results.insert('1.0', "please insert text before submitting")
    return
  submit['text'] = "Loading"

  print("give info to backend using HTTPS request for normal author")
  ## greeting_display = tk.Text(height=10, width = 30)
  # greeting_display.grid(column=6, row = 1)
 # results.insert(tk.END, input_text)
  
  my_obj = {'text': input_text}
  response = req.post('http://writeprint.herokuapp.com/predict_proba', my_obj)
  
  parsedResponse = json.loads(response.text)
  submit['text'] = "Submit new Text - check against our list"

  print(json.dumps(parsedResponse, indent=4))

  sortedresponse = sorted(parsedResponse.items(), key = lambda x:x[1], reverse=True)

  formattedData = ""
  for x in sortedresponse:
    formattedData += x[0] + ": " + str(round(x[1]*100, 2)) + "%\n"
  results.insert('1.0', formattedData)


# custom1 = ttk.Text(second_frame, height = 4, width = 50, bg='red')

customs = 0;
def custom_authors():
  changeDir['text'] = "Submit custom author"
  global offset  
  global customList
  global customs
  global removeCustom
  global addCustom
  customs += 1
  if(customs == 1):
    addCustom = ttk.Button(second_frame, text="Add custom author", command = custom_authors_add)
    removeCustom = ttk.Button(second_frame, text="Remove last added custom author", command = remove_custom)
    addCustom.grid(row=9)
    removeCustom.grid(row=8)
    results.grid(row = 11)
    addCustom.grid(row = 10)
    

  #if(customs ==1):
    ##removeCustom.grid(row =8)
    # changeDir.grid(row=7)
    #results.grid(row = 10)
    #addCustom.grid(row = 9)
  custom1 = ttk.Text(second_frame, height = 4, width = 50, bg='red')
  customList.append(custom1)
  offset+=1
  custom1.grid(row=5+offset)  
  submit.grid(row=6+offset)
  results.grid(row=10+offset)
  changeDir.grid(row=offset+7)
  removeCustom.grid(row = 8 + offset)
  addCustom.grid(row = 9 + offset)
  print("give info to backend using HTTPS request for custom author")
  print("after 1st button size: " + str(len(customList)))
 # print(customList)

def custom_authors_add():
  global offset
  global customList
  global customs
  custom1 = ttk.Text(second_frame, height = 4, width = 50, bg='red')
  customList.append(custom1)
  offset+=1
  customs += 1
  custom1.grid(row=5+offset)  
  submit.grid(row=6+offset)
  results.grid(row=10+offset)
  changeDir.grid(row=offset+7)
  addCustom.grid(row = offset + 9)
  removeCustom.grid(row = 8 + offset)
  print("added: " + str(customs))
  print("after add button size: " + str(len(customList)))

def remove_custom():
  global customs
  global offset
  global customList
  customs -=1
  offset -=0
 
  if(customs <= 0):
    changeDir['text'] = "Want to compare against custom authors?"
    removeCustom.destroy()
    addCustom.destroy()
    customList[0].destroy()
    customList.pop(0)

  
  else:
    submit.grid(row=6+offset)
    results.grid(row=10+offset)
    changeDir.grid(row=offset+7)
    addCustom.grid(row = offset + 9)
    removeCustom.grid(row = 8 + offset)
    customList[0].destroy()
    customList.pop(0)
  print("remove: " + str(customs))
  print("after remove button size: " + str(len(customList)))


title = ttk.Label(second_frame, text="welcome to text-fingerprinting").grid(row=1)
subtitle = ttk.Label(second_frame, text="insert text in textbox to find if your text matches with anyone").grid(row=2)
info = ttk.Label(second_frame, text = "yellow is text you want to get checked").grid(row=3)
info1 = ttk.Label(second_frame, text = "for custom author insert training text for each author in red, green and orange text boxes. Then click custom authors").grid(row=4)

text = ttk.Text(second_frame, height = 4, width = 90, bg='yellow')
text.grid(row=5)

submit = ttk.Button(second_frame, text="Submit Text - check against our list", command = submit_text)
submit.grid(row=6)

results = ttk.Text(second_frame, height = 50, width = 50)
results.grid(row=8)

changeDir = ttk.Button(second_frame, text="Want to compare against custom authors?", command = custom_authors)
changeDir.grid(row=7)

removeCustom = ttk.Button(second_frame, text="Remove last added custom author", command = remove_custom)
addCustom = ttk.Button(second_frame, text="Add custom author", command = custom_authors_add)

root.mainloop()
