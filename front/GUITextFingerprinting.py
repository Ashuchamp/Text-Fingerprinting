import tkinter as tk

window = tk.Tk()

window.title("Text fingerprinting pre-determined authors")

window.geometry("2000x1000")



title = tk.Label(text="welcome to text-fingerprinting")
subtitle = tk.Label(text = "insert text in textbox to find if your text matches with anyone")
title.grid(column=2, row=0)
subtitle.grid(column=2, row=1)

def submit_text():
  input_text = text.get("1.0", 'end-1c')
  print(input_text)
  ## greeting_display = tk.Text(height=10, width = 30)
  # greeting_display.grid(column=6, row = 1)
  results.insert(tk.END, input_text)

text = tk.Text(window, height = 4, width = 100, bg='yellow')
text.grid(row=3, column=2)

submit = tk.Button(text="Submit Text", command = submit_text)
submit.grid(row=5, column=2)

results = tk.Entry()
results.grid(row=6, column=2)

changeDir = tk.Button(text="Custom Authors")
changeDir.grid(row=4, column=2)

window.mainloop()
