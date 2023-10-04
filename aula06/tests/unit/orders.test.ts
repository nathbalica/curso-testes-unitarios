import { faker } from "@faker-js/faker";
import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const order = {
      client: 'Maria',
      description: 'Descricao qualquer'
    }

    jest.spyOn(orderRepository, "create").mockResolvedValue({ protocol: 'someProtocol', status: 'IN_PREPARATION' })
    await createOrder(order)
    expect(orderRepository.create).toBeCalledWith(order)

  });

  it("should return an order based on the protocol", async () => {
    const order = {
      client: 'Maria',
      description: 'Descricao qualquer',
    }

    jest.spyOn(orderRepository, "getByProtocol").mockImplementation((): any => {
      return {
        id: 1,
        client: order.client,
        description: order.description,
        protocol: "946684800000",
        status: "IN_PREPARATION"
      }
    })

    const protocol = "946684800000";
    const getOrder = await getOrderByProtocol(protocol)

    expect(getOrder.protocol).toBe("946684800000");
    expect(getOrder.status).toBe("IN_PREPARATION");
});


  it("should return status INVALID when protocol doesn't exists", async () => {
    jest.spyOn(orderRepository, "getByProtocol").mockImplementation((): any => {
      return null;
    })
  
    const protocol = "946684800003"; // Um protocolo que supostamente não existe.
    const getOrder = await getOrderByProtocol(protocol);
  
    expect(getOrder).toEqual({
      protocol,
      status: "INVALID"
    });

  });
});