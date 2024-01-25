"use client";
import { useState } from "react";
import { Checkout } from "./checkout";

interface TabProps {
  atk: string;
}
const cards = [
  {
    companyId: "123456789",
    lastNumber: "**** **** **** 1234",
    cardExpiration: {
      month: 12,
      year: 2024,
    },
    brand: "Visa",
    nickName: "Cartão Pessoal",
  },
  {
    companyId: "987654321",
    lastNumber: "**** **** **** 5678",
    cardExpiration: {
      month: 10,
      year: 2023,
    },
    brand: "MasterCard",
    nickName: "Cartão de Viagem",
  },
  {
    companyId: "555555555",
    lastNumber: "**** **** **** 9999",
    cardExpiration: {
      month: 8,
      year: 2022,
    },
    brand: "American Express",
    nickName: "Cartão Corporativo",
  },
  {
    companyId: "111111111",
    lastNumber: "**** **** **** 7890",
    cardExpiration: {
      month: 5,
      year: 2025,
    },
    brand: "Discover",
    nickName: "Cartão de Presente",
  },
  {
    companyId: "777777777",
    lastNumber: "**** **** **** 4321",
    cardExpiration: {
      month: 2,
      year: 2023,
    },
    brand: "Diners Club",
    nickName: "Cartão de Débito",
  },
];
export const Tabs = ({ atk }: TabProps) => {
  const [openTab, setOpenTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setOpenTab(tabNumber);
  };
  return (
    <div className="bg-gray-100 font-sans flex h-screen items-center justify-center">
      <div className="p-8">
        <div className="max-w-md mx-auto  bg-white rounded-lg ">
          <p className="text-gray-400"> {"meu : " + atk}</p>
          {openTab === 1 && (
            <>
              <div className="max-w-2xl mx-auto inter ">
                <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8  dark:border-gray-200">
                  <div className="mb-4">
                    {openTab !== 1 && (
                      <button className="inline-flex items-center text-base font-semibold text-gray-400 ">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    )}
                    <h3 className="text-base font-bold leading-none text-gray-700">
                      Meus Cartões
                    </h3>
                  </div>
                  <div className="flow-root">
                    <ul
                      role="list"
                      className="divide-y divide-gray-200 dark:divide-gray-200"
                    >
                      {cards.map((card, index) => {
                        return (
                          <li key={index} className="py-3 sm:py-2 sm:pt-3">
                            <div className="flex items-center space-x-4 cursor-pointer">
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-700 truncate ">
                                  {card.brand} - {card.nickName}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  {card.lastNumber}
                                </p>
                              </div>
                              <button className="inline-flex items-center text-base font-semibold text-gray-400 ">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                    fill="currentColor"
                                  />
                                </svg>{" "}
                              </button>
                            </div>
                          </li>
                        );
                      })}
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4 cursor-pointer">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-700 truncate ">
                              Adicionar Cartão
                            </p>
                          </div>
                          <button className="inline-flex items-center text-base font-semibold text-gray-400 ">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                                fill="currentColor"
                              />
                            </svg>{" "}
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
          {openTab === 2 && <>Dados de Pagamento</>}
          {openTab === 3 && <Checkout />}
        </div>
      </div>
    </div>
  );
};
