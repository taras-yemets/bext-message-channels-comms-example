export {}

function main() {
  const { port1, port2 } = new MessageChannel()
  port1.start()
  port1.addEventListener("message", (event) => {
    console.log("Incoming message on port1:", event.data)
  })
  const { port1: anotherPort1, port2: anotherPort2 } = new MessageChannel()
  port2.postMessage({ value: anotherPort1 }, [anotherPort1])
}

main()
