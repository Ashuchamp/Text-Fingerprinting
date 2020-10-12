import tkinter as tk
import requests as req
import json

window = tk.Tk()

window.title("Text fingerprinting pre-determined authors")

window.geometry("2000x1000")



title = tk.Label(text="welcome to text-fingerprinting")
subtitle = tk.Label(text = "insert text in textbox to find if your text matches with anyone")
info = tk.Label(text = "yellow is text you want to get checked")
info1 = tk.Label(text = "for custom author insert training text for each author in red, green and orange text boxes. Then click custom authors")
title.grid(row=1)
subtitle.grid(row=2)
info.grid(row = 3)
info1.grid(row = 4)

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

text = tk.Text(window, height = 4, width = 99, bg='yellow')
text.grid(row=5)

custom1 = tk.Text(window, height = 4, width = 50, bg='red')
custom1.grid(row=6)

custom2 = tk.Text(window, height = 4, width = 50, bg='green')
custom2.grid(row=7)

custom3 = tk.Text(window, height = 4, width = 50, bg='orange')
custom3.grid(row=8)

submit = tk.Button(text="Submit Text - check against our list", command = submit_text)
submit.grid(row=9)

results = tk.Text(window, height = 5, width = 50)
results.grid(row=11)

changeDir = tk.Button(text="Custom Authors - check against your list", command = custom_authors)
changeDir.grid(row=10)

window.mainloop()
