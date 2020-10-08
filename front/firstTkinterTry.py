import tkinter as tk
import random
window = tk.Tk()

window.title("Greeting _______")

window.geometry("400x400")

def phrase_generator():
	phrases = ["Hello", "What's up", "Aloha", "Hafa Adai"]
	name = str(entry1.get())
	return phrases[random.randint(0, 3)] + name

def phrase_display():
	greeting = phrase_generator()
	greeting_display = tk.Text(master=window, height = 10, width=30)
	greeting_display.grid(column=0, row = 3)

	greeting_display.insert(tk.END, greeting)

label1 = tk.Label(text="welcome to my app")
label1.grid(column = 0, row = 0)

label2 = tk.Label(text = "what is your name?")
label2.grid(column = 0, row = 1)

entry1 = tk.Entry()
entry1.grid(column = 1, row = 1)

button1 = tk.Button(text = "Click me", command = phrase_display)
button1.grid(column = 0, row = 2)

# title = tk.Label(text="hello world")
# title.grid()

# button1 = tk.Button(text="Click me")
# button1.grid(column = 0, row = 1)

# entry_field1 = tk.Entry()
# entry_field1.grid(column = 0, row = 2)



window.mainloop()